export interface Worker {
  department: string;
  id: number;
  joinDate: string;
  name: string;
  performance: number;
  role: string;
  status: "active" | "inactive" | "on_leave";
}

const ROLES = [
  "Frontend Engineer",
  "Backend Engineer",
  "Full-Stack Engineer",
  "DevOps Engineer",
  "Product Manager",
  "UX Designer",
  "QA Engineer",
  "Data Engineer",
  "Engineering Manager",
  "Tech Lead",
];

const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Data",
  "Infrastructure",
  "Operations",
];

const FIRST_NAMES = [
  "Adi",
  "Budi",
  "Citra",
  "Dewi",
  "Eko",
  "Fitri",
  "Gilang",
  "Hana",
  "Indra",
  "Joko",
  "Kartika",
  "Lina",
  "Maya",
  "Nina",
  "Oka",
  "Putri",
  "Rina",
  "Sari",
  "Tono",
  "Umar",
  "Vina",
  "Wati",
  "Yanto",
  "Zahra",
];

const LAST_NAMES = [
  "Pratama",
  "Wijaya",
  "Santoso",
  "Kusuma",
  "Hartono",
  "Susanti",
  "Rahman",
  "Putra",
  "Saputra",
  "Anggraini",
  "Nugroho",
  "Lestari",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start: string, end: string): string {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const date = new Date(startDate + Math.random() * (endDate - startDate));
  return date.toISOString().split("T")[0];
}

export function generateWorkers(count: number = 100): Worker[] {
  const workers: Worker[] = [];
  for (let i = 1; i <= count; i++) {
    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
    workers.push({
      department: pick(DEPARTMENTS),
      id: i,
      joinDate: randomDate("2020-01-01", "2026-06-01"),
      name,
      performance: Math.round((Math.random() * 4 + 1) * 10) / 10,
      role: pick(ROLES),
      status: pick(["active", "active", "active", "inactive", "on_leave"]),
    });
  }
  return workers;
}

export const mockWorkers = generateWorkers(100);
