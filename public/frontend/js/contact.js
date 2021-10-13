$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true,
                    minlength: 8
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "allez, vous avez un nom, n'est-ce pas ?",
                    minlength: "votre nom doit avoir au moins 2 caractères"
                },
                subject: {
                    required: "allez, vous avez un sujet, n'est-ce pas ?",
                    minlength: "votre sujet doit avoir au moins 4 caractères"
                },
                number: {
                    required: "allez, vous avez un numéro, n'est-ce pas ? ",
                    minlength: "votre numéro doit avoir au moins 8 caractères"
                },
                email: {
                    required: "pas de mail, pas de message"
                },
                message: {
                    required: "euh...oui, vous devez écrire quelque chose pour envoyer ce formulaire.",
                    minlength: "Votre sujet doit avoir au moins 10 caractères"
                }
            },
            submitHandler: function(form) {
                $.ajaxSetup({
                    headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url: $(form).attr('action'),
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })

 })(jQuery)
})