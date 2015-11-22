import Ember from 'ember';

export default Ember.Route.extend({
    model() {
            return this.store.filter('todo', function(todo) {
                return todo.get('complete');
            });
        },
        renderTemplate(controller, model) {
            //tells ember to render the template for todos.index (app/templates/todos/index.hbs) and apply the model for this route as the model.
            this.render('todos.index', {
                model: model
            });
        }
});
