import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['editing'], //apply a class 'editing' to the <li> enclosing tag of our component.
    editing: false,
    actions: {
        editTodo() {
                //Toggle the edit attribute to true
                this.toggleProperty('editing');
            },
            submitTodo() {
                let todo = this.get('todo');
                if (todo.get('title') === "") {
                    this.sendAction('deleteTodo', todo);
                } else {
                    this.sendAction('updateTodo', this.get('todo'));
                }
                this.set('editing', false);
            },
            deleteTodo() {
                let todo = this.get('todo');
                this.sendAction('deleteTodo', todo);
            }
    }
});
