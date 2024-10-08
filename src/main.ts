import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Metodo para extraer los pacientes de pediatria.

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
     return pacientes.filter((paciente: Pacientes): boolean => paciente.especialidad === "Pediatra")
  };
  
const pacientesFiltrados = obtenPacientesAsignadosAPediatria(pacientes)
console.log("Estos son los pacientes de pediatria", pacientesFiltrados);

//Metodo para extraer pacientes asignados a pediatria, menores de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes): boolean => paciente.especialidad === "Pediatra" && paciente.edad < 10)
  };

const pediatriaMenorDeDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log("Estos son los pacientes de pediatria menores de 10 años" , pediatriaMenorDeDiez);

// Metodo para aplicar el protocolo de emergencia 

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  
   return pacientes.some((paciente: Pacientes):boolean => 
    paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100);
  };

const protocoloEmergencia = activarProtocoloUrgencia(pacientes);
console.log("¿Es necesario el activar el protocolo?", protocoloEmergencia);

//Metodo para reasignar a los pacientes al medico de familia

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.map((paciente: Pacientes) => ({
        ...paciente,
        especialidad: paciente.especialidad === "Pediatra" ? "Medico de familia" : paciente.especialidad,
    }));
  };
console.log("Este es el nuevo Array con los pacientes reasignados", reasignaPacientesAMedicoFamilia(pacientes));

//Metodo para verificar si el pediatra tiene pacientes asignados

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    const paciente = pacientes.find((pacientes: Pacientes) => pacientes.especialidad === "Pediatra");
    return paciente !== undefined;
  };
console.log("¿Hay pacientes de pediatria?", HayPacientesDePediatria(pacientes));

//Metodo para contar la cantidad de pacientes de acuerdo a la especialidad.

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    return pacientes.reduce<NumeroPacientesPorEspecialidad>((contador, paciente) => {
        switch (paciente.especialidad){
            case "Cardiólogo":
                contador.cardiologia++;
                break;
            case "Medico de familia":
                contador.medicoDeFamilia++;
                break;
            case"Pediatra":
                contador.pediatria++;
                break;
        }
        return contador;
    }, {medicoDeFamilia: 0, pediatria: 0, cardiologia: 0});
  };
console.log("Cantidad de pacientes segun la especialidad:", cuentaPacientesPorEspecialidad(pacientes));
