const request = require('supertest');
const app = require('../server');

describe('Azure Deployment Tests', () => {
  it('should return 200 from health endpoint', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('Healthy');
    expect(res.body.cloud).toEqual('Azure App Service');
  });

  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toContain('successfully deployed on Azure');
  });

  it('should return API information', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.project).toEqual('Multi-Cloud App Deployment');
  });
});
