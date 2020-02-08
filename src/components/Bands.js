import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

	render() {
		const bandsArr = this.props.bands.map( band => {
			return <Band key={band.id} {...band} deleteBand={this.props.deleteBand} />
		})

		return (
			<div>
				{bandsArr}
			</div>
		)
	}

}

export default Bands