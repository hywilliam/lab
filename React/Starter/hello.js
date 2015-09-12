/**
 * Created by hywilliam on 9/12/15.
 */
var HelloMessage = React.createClass({
  render: function () {
    return <p>Hello {this.props.name}</p>;
  }
});

React.render(<HelloMessage name="william"/>, document.getElementById('hello'));

//alert('11');
