import useSelectUserStore from "store/useSelectUserStore";

import PatientItem from "./PatientItem";

const PatientList = ({ patients }: { patients: { examinationId: string; name: string }[] }) => {
  const setUser = useSelectUserStore(state => state.setUser);

  return (
    <div className="relative flex-1 overflow-auto transition-all mt-4 tb:mt-8 tb:px-4 py-2 px-2 bg-transparent">
      <ul className="gap-2 tb:gap-3 flex tb:flex-col overflow-x-auto whitespace-nowrap">
        {patients.map(patient => (
          <PatientItem
            key={patient.examinationId}
            name={patient.name}
            examinationId={patient.examinationId}
            onClick={() => {
              setUser(patient);
              close();
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
