import { StateMachine, State, EventListener, NextAction } from 'ocustate';
import Express from 'express';
const app = Express();
app.use(Express.json());
app.use(Express.static('public'));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

class Machine implements EventListener {
	async setMachinePath(forState: string) {
		console.log(`Get StateMachine from state of ${forState}`);
		return 'http://localhost:3000/states/states.json';
	}

	async executeState(state: State) {
		console.log(`Executing state ${state.name}`);
		return NextAction.NoOp;
	}
}

const myMachine = new Machine();
StateMachine.AddEventListener(myMachine);
StateMachine.Execute('Draft');
