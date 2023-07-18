
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const description = `You can get accounts.
 
  Example:
    $ s config get
    $ s config get -a demo
    $ only test
 `;
export default class ComponentDemo {
  private logger: any;
  commands = {} as Record<string, any>;
  constructor({ logger }) {
    this.logger = logger || console;
    this.commands = {
      deploy: {
        help: {
          description,
          summary: 'Deploy local resources online',
          option: [
            ['--type', 'Only deploy configuration or code, value: code/config'],
            ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
          ],
        },
        subCommands: {
          service: {
            help: {
              description,
              summary: 'Only deploy service resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
              ],
            }

          },
          function: {
            help: {
              description,
              summary: 'Only deploy function resources',
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
          description,
          summary: 'The ability to delete resources ',
          option: [
            [' -y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
          ],
        },
        subCommands: {
          service: {
            help: {
              description,
              summary: 'Only deploy service resources',
              option: [
                ['-y, --assume-yes', 'Assume that the answer to any question which would be asked is yes'],
              ],
            }

          },
          function: {
            help: {
              description,
              summary: 'Only deploy function resources',
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
    this.logger.debug(`v3test deploy debug: ${JSON.stringify(inputs)}`);
    this.logger.progress('checking')
    await sleep(1000);
    this.logger.progress('creating')
    await sleep(1000);
    this.logger.progress('finished')
    await sleep(1000);
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
