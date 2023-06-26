/**
 * General class for make different selectors instance.
 */
class CSSSelectorBuilderClass {
  // Initialize fields for different selectors, strings for ERRORS.
  constructor() {
    this.htmlElementSelector = null;
    this.idSelector = null;
    this.classSelectorsArr = [];
    this.attrSelectorsArr = [];
    this.pseudoClassSelectorsArr = [];
    this.pseudoElementSelector = null;
    this.combinedSelectors = {
      isExist: false,
      selector1: null,
      combinator: null,
      selector2: null,
    };

    this.elementError = () => 'Element, id and pseudo-element should not occur more'
      + ' then one time inside the selector';
    this.idError = () => 'Element, id and pseudo-element should not occur more'
      + ' then one time inside the selector';
    this.pseudoElementError = () => 'Element, id and pseudo-element should not occur more'
      + ' then one time inside the selector';
    this.orderError = 'Selector parts should be arranged in the following order:'
      + ' element, id, class, attribute, pseudo-class, pseudo-element';
  }

  /**
   * Generate (set) CSS selector for HTML element.
   * @param value {string}                  - HTML element name.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  element(value) {
    // If the element already exists in the selector chain, throw error, because selector string
    // can have only one HTML element without combinator.
    if (this.htmlElementSelector) {
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.elementError());
    } else if (this.idSelector !== null
      || this.classSelectorsArr.length !== 0
      || this.attrSelectorsArr.length !== 0
      || this.pseudoClassSelectorsArr.length !== 0
      || this.pseudoElementSelector !== null) {
      // Check, what identifier, class, attribute, pseudo-class, pseudo-element does not exist yet.
      throw new Error(this.orderError);
    } else {
      this.htmlElementSelector = value;
      return this;
    }
  }

  /**
   * Generate (set) CSS selector for id.
   * @param value {string}                  - element id name.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  id(value) {
    // If the id already exists in the selector chain, throw error, because selector string
    // can have only one id without combinator.
    if (this.idSelector) {
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.idError());
    } else if (this.classSelectorsArr.length !== 0
      || this.attrSelectorsArr.length !== 0
      || this.pseudoClassSelectorsArr.length !== 0
      || this.pseudoElementSelector !== null) {
      // Check, what class, attribute, pseudo-class, pseudo-element does not exist yet.
      throw new Error(this.orderError);
    } else {
      this.idSelector = value;
      return this;
    }
  }

  /**
   * Generate (set) CSS selector for class.
   * @param value {string}                  - element class name.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  class(value) {
    if (this.attrSelectorsArr.length !== 0
      || this.pseudoClassSelectorsArr.length !== 0
      || this.pseudoElementSelector !== null) {
      // Check, what attribute, pseudo-class, pseudo-element does not exist yet.
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.orderError);
    } else {
      this.classSelectorsArr.push(value);
      return this;
    }
  }

  /**
   * Generate (set) CSS selector for attribute.
   * @param value {string}                  - element attribute assigment string.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  attr(value) {
    if (this.pseudoClassSelectorsArr.length !== 0
      || this.pseudoElementSelector !== null) {
      // Check, what pseudo-class, pseudo-element does not exist yet.
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.orderError);
    } else {
      this.attrSelectorsArr.push(value);
      return this;
    }
  }

  /**
   * Generate (set) CSS selector for pseudo-class.
   * @param value {string}                  - pseudo-class name.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  pseudoClass(value) {
    if (this.pseudoElementSelector !== null) {
      // Check, what pseudo-class, pseudo-element does not exist yet.
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.orderError);
    } else {
      this.pseudoClassSelectorsArr.push(value);
      return this;
    }
  }

  /**
   * Generate (set) CSS selector for pseudo-element.
   * @param value {string}                  - pseudo-element name.
   * @return      {CSSSelectorBuilderClass} - selector components and methods.
   */
  pseudoElement(value) {
    if (this.pseudoElementSelector) {
      // If the pseudo-element already exists in the selector chain, throw error, because
      // selector string can have only one pseudo-element without combinator.
      // eslint-disable-next-line no-console
      console.log('ERROR');
      throw new Error(this.pseudoElementError());
    } else {
      this.pseudoElementSelector = value;
      return this;
    }
  }

  /**
   * Generate (set) combined CSS selectors.
   * @param selector1   {string}       - left hand selector.
   * @param combinator  {string}       - combinator.
   * @param selector2   {string}       - right hand selector.
   * @return {CSSSelectorBuilderClass} - selector components and methods.
   */
  combine(selector1, combinator, selector2) {
    this.combinedSelectors.selector1 = selector1;
    this.combinedSelectors.combinator = combinator;
    this.combinedSelectors.selector2 = selector2;
    this.combinedSelectors.isExist = true;
    return this;
  }

  /**
   * Get selector string from Object with selector components.
   * @return {string} - selector string from selector object.
   */
  stringify() {
    let cssSelectorStr = '';
    // Sequential processing of specified selectors (concatenate).
    if (this.htmlElementSelector !== null) {
      cssSelectorStr = `${cssSelectorStr}${this.htmlElementSelector}`;
    }
    if (this.idSelector !== null) {
      cssSelectorStr = `${cssSelectorStr}#${this.idSelector}`;
    }
    if (this.classSelectorsArr.length !== 0) {
      this.classSelectorsArr.forEach((className) => {
        cssSelectorStr = `${cssSelectorStr}.${className}`;
      });
    }
    if (this.attrSelectorsArr.length !== 0) {
      this.attrSelectorsArr.forEach((attrName) => {
        cssSelectorStr = `${cssSelectorStr}[${attrName}]`;
      });
    }
    if (this.pseudoClassSelectorsArr.length !== 0) {
      this.pseudoClassSelectorsArr.forEach((pseudoClassName) => {
        cssSelectorStr = `${cssSelectorStr}:${pseudoClassName}`;
      });
    }
    if (this.pseudoElementSelector !== null) {
      cssSelectorStr = `${cssSelectorStr}::${this.pseudoElementSelector}`;
    }
    if (this.combinedSelectors.isExist) {
      cssSelectorStr = `${this.combinedSelectors.selector1.stringify()}`
        + ` ${this.combinedSelectors.combinator}`
        + ` ${this.combinedSelectors.selector2.stringify()}`;
    }

    // eslint-disable-next-line no-console
    console.log(cssSelectorStr);
    return cssSelectorStr;
  }
}

module.exports = {
  CSSSelectorBuilderClass,
};
