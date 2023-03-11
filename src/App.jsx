// import { OnBoarding, Task, Tag, AddTaskBtn } from './components/index';
import { AddTaskBtn } from './components/AddTaskBtn';
import { Task } from './components/Task/Task';
import { TodoProvider } from './context/TaskContext';
import { ModalProvider } from './context/ModalContext';

const App = () => {

	return (
		// Extract to the up bottom jerarchy, the task state
		<TodoProvider>
			<ModalProvider>
				<div style={{
					display: "flex",
					flexFlow: "wrap",
					width: "100%",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center"
				}}>
					<Task tagAlert="soon" />
					<AddTaskBtn />
				</div>
			</ModalProvider>
		</TodoProvider>
	);
};

export default App;


