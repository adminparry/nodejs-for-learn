
import { datasourceFactory } from './connection';
import { Person } from './model/Person';
const datasource = datasourceFactory();
async function main() {
    // await datasourceFactory();

    const selectById = await Person.findAll();
    console.log(JSON.stringify(selectById))

}
main();
