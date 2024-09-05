import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://pedro4na_user:D92TfYzxA3Ktm84aCy0AXA89PpGCNX9c@dpg-cr7qs6rtq21c73aiobhg-a.oregon-postgres.render.com/pedro4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;