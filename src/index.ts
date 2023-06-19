
export default class ComponentDemo {
  private logger: any;
  constructor({ logger }) {
    this.logger = logger || console;
  }
  public async deploy(inputs) {

    this.logger.log(`deploy: ${JSON.stringify(inputs, null, 2)}`);

    return { hello: 'world' };
  }
}
