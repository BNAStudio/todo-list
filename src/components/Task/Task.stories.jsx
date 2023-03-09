import { Task } from "./Task";

export default {
    title: 'Task',
    component: Task,
}

const Template = (args) => <Task {...args} />

// export const TaskList = (args) => (
//     <Task {...Task.args} />
// )

export const Soon = Template.bind({});
Soon.args = { tagAlert: "soon" };

export const Yesterday = Template.bind({});
Yesterday.args = { tagAlert: "yesterday" };

export const Today = Template.bind({});
Today.args = { tagAlert: "today" };

export const Tomorrow = Template.bind({});
Tomorrow.args = { tagAlert: "tomorrow" };