function Person() {
    return (
        <div class="person">
            <h1>Jorge</h1>
            <p>Age: 24</p>
        </div>
    );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));