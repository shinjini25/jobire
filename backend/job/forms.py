from django import forms     
FAVORITE_COLORS_CHOICES = [
        ('WEB_DEV', 'Web Development'),
    ("PHP", "PHP"),
   ( "SQL" , "SQL"),
    ("JS" , "JavaScript"),
    ( "AN" , "Android Development"),
]
class SkillsForm(forms.Form):
    options = forms.MultipleChoiceField(choices=FAVORITE_COLORS_CHOICES,)