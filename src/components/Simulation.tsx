import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import "./Simulation.css";

interface SimulationProps {
  isOpen: boolean;
  close: () => void; // close est une fonction qui ne retourne rien
}

const Simulation: React.FC<SimulationProps> = ({ isOpen, close }) => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTermMonths, setLoanTermMonths] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMonthlyPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //  L'apport ne devrait pas être supérieur au montant du prêt
    if (downPayment >= loanAmount) {
      alert("L'apport ne peut pas être supérieur ou égal au montant du prêt.");
      return;
    }

    const principal = loanAmount - downPayment;
    const monthlyInterestRate = 0.05 / 12; // Exemple de taux d'intérêt annuel de 5%
    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
    const payment = principal * (numerator / denominator);

    setMonthlyPayment(payment);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-blue bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-blue-800/30 backdrop-blur mt-10">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-between">
              <h3 className="text-2xl font-bold leading-6 text-teal-400">
               Simulation
              </h3>
              <button
                onClick={close}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>

            <form className="space-y-4" onSubmit={calculateMonthlyPayment}>
              <div className="form-group">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-slate-100"
                >
                  Montant à Financer :
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                  className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md p-4"
                  placeholder="0"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="contribution"
                  className="block text-sm font-medium text-slate-100"
                >
                  Apport :
                </label>
                <input
                  type="number"
                  id="contribution"
                  name="contribution"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseFloat(e.target.value))}
                  className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md p-4"
                  placeholder="0"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-slate-100"
                >
                  Durée :
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={loanTermMonths}
                  onChange={(e) =>
                    setLoanTermMonths(parseFloat(e.target.value))
                  }
                  className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md p-4"
                  placeholder="mois"
                />
              </div>
              <div className="form-result">
                <p className="text-lg font-extrabold text-slate-400">
                  {monthlyPayment !== null
                    ? `${monthlyPayment.toFixed(2)} € / mois *`
                    : "0.00 € / mois *"}
                </p>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Faire une demande
                  <FontAwesomeIcon icon={faRocket} className="ml-4" />
                </button>
              </div>
            </form>
            <p className="text-xs italic mt-4 text-slate-100">
              *Simulation préliminaire non contractuelle. Un crédit vous engage
              et doit être remboursé. Vérifiez vos capacités de remboursement
              avant de vous engager. Des frais de dossiers peuvent s'appliquer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Simulation;
