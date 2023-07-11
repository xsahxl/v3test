
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default class ComponentDemo {
  private logger: any;
  commands = {} as Record<string, any>;
  constructor({ logger }) {
    this.logger = logger || console;
    this.commands = {
      // help: () => 'this is a help function for s -h or s website -h',
      deploy: {
        help: {
          description: `
          Deploy
            Deploy local resources online 
          Document
            https://serverless.help/t/fc-deploy`,
          summary: 'Deploy local resources online',
          option: [
            ['--type', 'Only deploy configuration or code, value: code/config'],
            ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
          ],
        },
        subCommands: {
          service: {
            help: {
              description: `
              Deploy Service
                Only deploy service resources 
              Document
                https://serverless.help/t/fc-deploy-service`,
              sunmary: 'Only deploy service resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
              ],
            }

          },
          function: {
            help: {
              description: `
              Deploy function
                Only deploy function resources 
              Document
                https://serverless.help/t/fc-deploy-function`,
              sunmary: 'Only deploy function resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
                ['--skip-push', 'Skip automatically pushing docker container images'],
              ],
            }

          }
        }
      },
      remove: {
        help: {
          description: `
        Remove
        The ability to delete resources 
        Document
        https://serverless.help/t/remove`,
          summary: 'The ability to delete resources ',
          option: [
            [' -y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
          ],
        },
        subCommands: {
          service: {
            help: {
              description: `
                Deploy Service
                  Only deploy service resources 
                Document
                  https://serverless.help/t/fc-deploy-service`,
              sunmary: 'Only deploy service resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
              ],
            }

          },
          function: {
            help: {
              description: `
                Deploy function
                  Only deploy function resources 
                Document
                  https://serverless.help/t/fc-deploy-function`,
              sunmary: 'Only deploy function resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
                ['--skip-push', 'Skip automatically pushing docker container images'],
              ],
            }

          }
        }

      }
    }
  }
  public async deploy(inputs) {
    this.logger.info(`v3test deploy`);
    this.logger.debug(`v3test deploy debug: ${JSON.stringify(inputs)}`);
    return { hello: 'world' };
  }
  error() {
    throw new Error('error test');
  }
  async progress() {
    for (let i = 0; i < 10; i++) {
      await sleep(1000);
      this.logger.progress(`progress: ${i}`);
    }
    return { hello: 'world' };
  }
}
