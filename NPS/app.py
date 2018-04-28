from flask import Flask, render_template
from articles import NewsReleases

app = Flask (__name__)

NewsReleases = NewsReleases()


@app.route('/')
def index ():
    return render_template('home.html')

@app.route('/data')
def about():
    return render_template('data.html')

@app.route('/articles')
def newsReleases ():
    return render_template('newsReleases.html', newsReleases = NewsReleases)

@app.route('/article/<string:id>/')
def newsRelease (id):
    return render_template('newsRelease.html', id=id)

@app.route('/brenda')
def brenda():
    return render_template('brenda.html')

@app.route('/diane')
def diane():
    return render_template('diane.html')

@app.route('/jana')
def jana():
    return render_template('jana.html')

@app.route('/patsy')
def patsy():
    return render_template('patsy.html')












if __name__ == '__main__':
    app.run(debug=True)
