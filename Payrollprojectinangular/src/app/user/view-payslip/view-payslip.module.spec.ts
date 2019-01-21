import { ViewPayslipModule } from './view-payslip.module';

describe('ViewPayslipModule', () => {
  let viewPayslipModule: ViewPayslipModule;

  beforeEach(() => {
    viewPayslipModule = new ViewPayslipModule();
  });

  it('should create an instance', () => {
    expect(viewPayslipModule).toBeTruthy();
  });
});
