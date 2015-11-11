import Mirage, {faker} from 'ember-cli-mirage';

/*
This code will create a todo with title "Todo title 1" and randomly selected complete state of true or false.
*/
export default Mirage.Factory.extend({
    title(i) {
        return `Todo title ${i + 1}`;
    },
    complete: faker.list.random(true, false)
});
