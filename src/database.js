import { models } from "beast-orm";

class Todo extends models.Model {
    id = models.AutoField({
        primaryKey: true
    });
    todonya = models.CharField();
    isDone = models.BooleanField({
        default: false
    });
}

export { Todo };