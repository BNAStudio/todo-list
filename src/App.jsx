// import { OnBoarding, Task, Tag, AddTaskBtn } from './components/index';
import { TaskList } from './components/Task';
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
					<TaskList />
				</div>
			</ModalProvider>
		</TaskContextProvider>
	);
};

export default App;


