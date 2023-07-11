var r=Object.defineProperty;var n=s=>r(s,"__esModule",{value:!0});var i=(s,e)=>{n(s);for(var t in e)r(s,t,{get:e[t],enumerable:!0})};i(exports,{default:()=>o});var l=s=>new Promise(e=>setTimeout(e,s)),o=class{constructor({logger:e}){this.commands={};this.logger=e||console,this.commands={deploy:{help:{description:`
          Deploy
            Deploy local resources online 
          Document
            https://serverless.help/t/fc-deploy`,summary:"Deploy local resources online",option:[["--type","Only deploy configuration or code, value: code/config"],["-y, --assume-yes","Assume that the answer to any question which would be asked is yes"]]},subCommands:{service:{help:{description:`
              Deploy Service
                Only deploy service resources 
              Document
                https://serverless.help/t/fc-deploy-service`,sunmary:"Only deploy service resources",option:[["-y, --assume-yes","Assume that the answer to any question which would be asked is yes"]]}},function:{help:{description:`
              Deploy function
                Only deploy function resources 
              Document
                https://serverless.help/t/fc-deploy-function`,sunmary:"Only deploy function resources",option:[["-y, --assume-yes","Assume that the answer to any question which would be asked is yes"],["--skip-push","Skip automatically pushing docker container images"]]}}}},remove:{help:{description:`
        Remove
        The ability to delete resources 
        Document
        https://serverless.help/t/remove`,summary:"The ability to delete resources ",option:[[" -y, --assume-yes","Assume that the answer to any question which would be asked is yes"]]},subCommands:{service:{help:{description:`
                Deploy Service
                  Only deploy service resources 
                Document
                  https://serverless.help/t/fc-deploy-service`,sunmary:"Only deploy service resources",option:[["-y, --assume-yes","Assume that the answer to any question which would be asked is yes"]]}},function:{help:{description:`
                Deploy function
                  Only deploy function resources 
                Document
                  https://serverless.help/t/fc-deploy-function`,sunmary:"Only deploy function resources",option:[["-y, --assume-yes","Assume that the answer to any question which would be asked is yes"],["--skip-push","Skip automatically pushing docker container images"]]}}}}}}async deploy(e){return this.logger.info("v3test deploy"),this.logger.debug(`v3test deploy debug: ${JSON.stringify(e)}`),{hello:"world"}}error(){throw new Error("error test")}async progress(){for(let e=0;e<10;e++)await l(1e3),this.logger.progress(`progress: ${e}`);return{hello:"world"}}};0&&(module.exports={});
