name=''
def get_intent(data):
    global name
    m=data['message'].lower()
    if data['key']=="name":
        name=m
        return "next"
    if any(x in m for x in ["firstwoman","firstwomaninfields","firstindianwoman","First woman","first woman","name of first woman"]):
        return "firstwoman"
    if any(y in m for y in ["calculation","calculations","evaluate expression","calculator"]):
        return "calculation"
    if any(z in m for z in ["stop","end","exit"]):
        return "end"
    elif "fetch" in m:
        return "fetch"
    else:
        return "echo"

def handle(data):
    global name
    from flask import render_template
    intent=get_intent(data)
    if intent=='firstwoman':
        return render_template('firstwoman.html',question={'key': 'Your ans','text':'What else you want to do'})
    elif intent=='calculation':
        return render_template('calculation.html',question={'key': 'Your ans','text':'What else you want to do'})
    elif intent=='end':
        return render_template('end.html')
    elif intent=='next':
        return render_template('messages/greet.html', name=name,question={'key':'Your choice ', 'text':'What would you like to do'})
    else:
        return render_template('messages/echo1.html',data=data,question={'key': 'Your ans','text':'What else you want to do'})