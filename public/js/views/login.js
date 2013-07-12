define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/login.html'
], function($, _, Backbone, loginPageTemplate) {
    'use strict';
    var LoginPageView = Backbone.View.extend({
        el: $('#container'),
        events: {
            'submit .login-form' : 'onFormSubmit'
        },
        render: function() {
            if (localStorage.getItem('user') !== null) {
                var userInfo = $.parseJSON(localStorage.getItem('user'));
                console.log(userInfo);
                $('#container').before(
                    '<p>Jesteś zalogowany: <strong>'+
                    userInfo.userLogin+'</strong> (ID: '+
                    userInfo.userId+')</p>'
                );
            }
            var template = _.template(loginPageTemplate);
            this.$el.html(template);
        },
        onFormSubmit: function(e) {
            e.preventDefault();
            var form = $(e.target);

            $.ajax({
                url: 'http://localhost:3000/login',
                data: form.serialize(),
                success: function(data/*, textStatus*/) {
                    if (data !== '0') {
                        form.before('<p>Użytkownik został zalogowany.</p>');
                        localStorage.setItem('user', data);
                    } else {
                        form.before(
                            '<p>Błąd logowania, proszę spróbować ponownie.</p>'
                        );
                    }
                    //alert(data);
                    //console.log(data);
                    //console.log(textStatus);
                }
            });
        }
    });
    return LoginPageView;
});