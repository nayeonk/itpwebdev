var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource('threads', { path: '/threads' });
	this.resource('thread', { path: '/threads/:thread_id' });
	this.route('newThread', { path: '/threads/new' });
});


// have index route redirect to /threads always
App.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('threads');
  }
});

App.ThreadsRoute = Ember.Route.extend({
	model: function(params) {
		// var courseNumber = params.course_num;
		// return this.store.find('thread', { course: courseNumber });
		return this.store.find('thread');
	}
});

// Below is optional since it is the default in Ember
App.ThreadRoute = Ember.Route.extend({
	model: function(params) {		
		console.log('### RETRIEVING SINGLE THREAD FROM STORE ...');
		return this.store.find('thread', params.thread_id);
	}
});

App.ThreadsController = Ember.ArrayController.extend({
	actions: {
		filterByCourse: function(course) {
			console.log('filtering', course)
			var filteredThreads;

			if (course === 'all') {
				filteredThreads = this.store.find('thread');
			} else {
				filteredThreads = this.store.find('thread', { course: course });
			}
			
			console.log(filteredThreads);
			this.set('model', filteredThreads);
		}
	}
});

// MODELS
App.ApplicationAdapter = DS.RESTAdapter.extend();

App.Thread = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	created_at: DS.attr('date')
});