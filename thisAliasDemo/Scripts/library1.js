var LIB_METADATA =
{
	versionNumber: 40,
	isDev: true
}
var some_configuration_flag = false;
var other_configuration_flag = true;

/**
 * Performs library initialization and returns a
 * @param {object} config JSON configuration data, if ommitted the default configuration is used
 * @returns {boolean}
 */
function libStart(config) {
	//..
}

/**
 * Get a node by its id
 * @param {number} nodeid number to retrieve
 * @returns {object}
 */
function libNodeGet(nodeid) {
	//..
}

var libObjects = {}

/**
 * example of an object
 * @class
 */
libObjects.dataService = function (url) {
	var scope = this;

	/**
	 * updates some data
	 */
	scope.updateData = function () {
		//...
	}

	/**
	 * stop all processing
	 */
	scope.disable = function () {
		//...
	}
}


var service = new libObjects.dataService("");
service
