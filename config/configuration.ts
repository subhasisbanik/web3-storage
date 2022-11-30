export default () => ({
    port: parseInt(process.env.PORT, 10) || 4000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    },
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGViYjVEQTQ0ZGNBMTRiQ2Q0NzRlODNEOUM1QWI3MzAzMDIyZEE4ZTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjEyODk2NjEzMTIsIm5hbWUiOiJNeSBXaW5kb3dzIn0.A5WWOy9TsxwVq1M-nJhGOo2ZviOYh8K7q92rr50t7lM'
  });