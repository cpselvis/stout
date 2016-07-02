'use strict';

import Parser from '../src/parser'
import assert from 'assert'
import 'babel-polyfill'

const parser = new Parser('Name is: {{name}}, age is {{age}}');

/*
 * Tests
 */

describe('tokens', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      parser.tokens('Name is: {{name}}, age is {{age}}'),
      [ [ 'text', 'N', 0, 1 ],
        [ 'text', 'a', 1, 2 ],
        [ 'text', 'm', 2, 3 ],
        [ 'text', 'e', 3, 4 ],
        [ 'text', ' ', 4, 5 ],
        [ 'text', 'i', 5, 6 ],
        [ 'text', 's', 6, 7 ],
        [ 'text', ':', 7, 8 ],
        [ 'text', ' ', 8, 9 ],
        [ 'name', 'name', 9, 17 ],
        [ 'text', ',', 17, 18 ],
        [ 'text', ' ', 18, 19 ],
        [ 'text', 'a', 19, 20 ],
        [ 'text', 'g', 20, 21 ],
        [ 'text', 'e', 21, 22 ],
        [ 'text', ' ', 22, 23 ],
        [ 'text', 'i', 23, 24 ],
        [ 'text', 's', 24, 25 ],
        [ 'text', ' ', 25, 26 ],
        [ 'name', 'age', 26, 33 ] ],
      "tokens function passed through"
    );
  });

});
