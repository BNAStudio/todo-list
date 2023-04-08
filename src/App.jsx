import { TaskContextProvider } from './context/TaskContext';
import { ModalProvider } from './context/ModalContext';
import Dashboard from './pages/Dashboard';

// TODO: hacer el ENRUTAMIENTO

const App = () => {
	return (
		<TaskContextProvider>
			<ModalProvider>
				<Dashboard />
			</ModalProvider>
		</TaskContextProvider>
	);
};

export default App;


