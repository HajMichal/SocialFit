import { Exercises, Friendships, TrainingDay, Trainings, User } from "./schema";

const users: User[] = [
  {
    id: "a1b2c3d4-e5f6-7890-g1h2-ijklmnop3456",
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phone: "123456789",
    password: "hashedPassword123",
    role: "gymmer",
    country: "USA",
    city: "New York",
    gymName: "Powerhouse Gym",
    age: 30,
    height: "180.25",
    weight: "75.5",
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
  {
    id: "z9y8x7w6-v5u4-t3s2-r1q2-oplmknji8765",
    name: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    phone: "987654321",
    password: "hashedPassword456",
    role: "trainer",
    country: "Canada",
    city: "Toronto",
    gymName: "Fit Club",
    age: 28,
    height: "165.75",
    weight: "62.0",
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
  {
    id: "w1x2y3z4-u5v6-t7s8-r9q0-nmlkjihgf432",
    name: "Alice",
    surname: "Johnson",
    email: "alice.johnson@example.com",
    phone: "112233445",
    password: "hashedPassword789",
    role: "gymmer",
    country: "Australia",
    city: "Sydney",
    gymName: "Iron Paradise",
    age: 25,
    height: "170.10",
    weight: "68.3",
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
];

const friendships: Friendships[] = [
  {
    friendId: "w1x2y3z4-u5v6-t7s8-r9q0-nmlkjihgf432",
    userId: "z9y8x7w6-v5u4-t3s2-r1q2-oplmknji8765",
  },
];

const trainings: Trainings[] = [
  {
    id: "m9n8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    userId: "a1b2c3d4-e5f6-7890-g1h2-ijklmnop3456",
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
    name: "My Personal training",
    period: 6,
    weeklyFrequency: 3,
    description: "Lose 10kg",
  },
];

const trainingDay: TrainingDay[] = [
  {
    id: "w2a8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    trainingId: "m9n8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    name: "PUSH",
    description: null,
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
  {
    id: "x2x8d7p6-l5k4-j3i2-h1g2-fedcba987654",
    trainingId: "m9n8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    name: "PULL",
    description: null,
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
  {
    id: "q2q8s7p6-l5k4-j3i2-h1g2-fedcba987654",
    trainingId: "m9n8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    name: "LEGS",
    description: null,
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
];

const excercises: Exercises[] = [
  {
    id: "bffdf869-87fb-4b7d-8555-b9f9313a21c5",
    name: "Bench press",
    kilograms: "60",
    series: 3,
    trainingDayId: "w2a8o7p6-l5k4-j3i2-h1g2-fedcba987654",
    reps: ["2x6", "1x10"],
    description: null,
    trainingNumber: 0,
    rpe: null,
    createdAt: "2024-12-03",
    updatedAt: "2024-12-03",
  },
];
