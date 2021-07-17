const ENVIRONMENTS = ["development", "production"];

// Will be either 'development' or 'production'
let currentEnvironment: string = "";

if (!currentEnvironment) {
  currentEnvironment = ENVIRONMENTS.includes(process.env.NODE_ENV ?? "")
    ? (process.env.NODE_ENV as string)
    : "development";

  process.env.NODE_ENV = currentEnvironment;
}

export default currentEnvironment;
