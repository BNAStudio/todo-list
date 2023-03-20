// import { OnBoarding, Task, Tag, AddTaskBtn } from './components/index';
import { AddTaskBtn } from './components/AddTaskBtn';
import { Task } from './components/Task/Task';
import { TaskContextProvider } from './context/TaskContext';
import { ModalProvider } from './context/ModalContext';

const App = () => {

	return (
		// Extract to the up bottom jerarchy, the task state
		<TaskContextProvider>
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
		</TaskContextProvider>
	);
};

export default App;


