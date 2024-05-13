import StateMachine, { State, EventListener, NextAction } from 'ocustate';

class Machine implements EventListener {
	async setMachinePath(forState: string) {
		return './' + forState;
	}

	async executeState(state: State) {
		console.log('Executing state' + StaticRange.name);
		return NextAction.NoOp;
	}
}

const myMachine = new Machine();
StateMachine.AddEventListener(myMachine);
StateMachine.Execute('state');
