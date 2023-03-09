// import { OnBoarding, Task, Tag } from './components/index';
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
				</div>
			</ModalProvider>
		</TodoProvider>
	);
};

export default App;


