import modelsTask from "../models/Task";

//con el .engine ya definimos la extension que van a tener las vistas (index'.hbs')

// Raiz

export const renderRaiz = async (request, response) => {
    // Obtenemos los datos almacenados de 'task' en mongodb
    const taskfind = await modelsTask.find().lean(); // .lean() es para que devuelva objetos de JS y no de Mongo

    // tasks es un Objeto que contiene las variables que se van a pasar a la vista para su renderización
    response.render("index", { tasks: taskfind });
};

// Agregar Tarea

export const addTask = async (request, response) => {
    // console.log(request.body);
    try {
    // Creamos un modelo de datos "task" con los datos del formulario
    const task = modelsTask(request.body);
    // Guardamos los datos en mongodb
    await task.save();

    response.redirect("/");

    } catch (error) {
    console.error(error);
    }
};

// Edit

export const editTask =  async (request, response) => {
    // console.log(request.params.id);

    // Pasamos como argumento el id de la vista /edit al modelo "Task" transformando el objeto de mongo a JS
    const modelTaskId = await modelsTask.findById(request.params.id).lean();

    response.render("edit", { tasksId: modelTaskId });
};

// Update

export const updateTask = async (request, response) => {
    // console.log(request.body);
    // console.log(request.params.id);

    // mongoose tiene un metodo que actualiza directamente (id, datos actualizados)
    await modelsTask.findByIdAndUpdate(request.params.id, request.body);

    response.redirect("/");
};

// Delete

export const deleteTask = async (request, response) => {

    await modelsTask.findByIdAndDelete(request.params.id);

    response.redirect("/");
};

// Done

export const doneTask = async (request, response) => {

    const task = await modelsTask.findById(request.params.id);

    task.done = !task.done;

    await task.save();

    response.redirect("/");
};
