export default class ComponentDemo {
    private logger;
    commands: Record<string, any>;
    constructor({ logger }: {
        logger: any;
    });
    deploy(inputs: any): Promise<{
        hello: string;
    }>;
    error(): void;
    progress(): Promise<{
        hello: string;
    }>;
}
