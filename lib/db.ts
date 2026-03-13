import { Pool, type QueryResultRow } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool__: Pool | undefined;
}

function getConnectionString(): string {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing DATABASE_URL environment variable");
  }

  return connectionString;
}

function createPool(): Pool {
  return new Pool({
    connectionString: getConnectionString(),
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false
  });
}

function getPool(): Pool {
  if (globalThis.__pgPool__) {
    return globalThis.__pgPool__;
  }

  const pool = createPool();

  if (process.env.NODE_ENV !== "production") {
    globalThis.__pgPool__ = pool;
  }

  return pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = []
): Promise<T[]> {
  const result = await getPool().query<T>(text, params);
  return result.rows;
}