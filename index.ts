import StateMachine, { State, EventListener, NextAction } from 'ocustate';
import path from 'path';

class Machine implements EventListener {
	async setMachinePath(forState: string) {
		console.log(`Get StateMachine from state of ${forState}`);
		return path.resolve(__dirname, 'states', 'states.json');
	}

	async executeState(state: State) {
		console.log('Executing state' + state.name);
		return NextAction.NoOp;
	}
}

const myMachine = new Machine();
StateMachine.AddEventListener(myMachine);
StateMachine.Execute('state');
