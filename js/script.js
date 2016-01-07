(function(){

  function toggleMenu(buttonClassName, menuItemsClassName){

  }
  var menuHamburgers = document.getElementsByClassName('menu-hamburger');
  var menuListItems = document.getElementsByClassName('menu-items');
  menuHamburgers.on("click", function() {
    toggleClass(this, 'menu-hamburger-open');
    toggleClass(menuListItems, 'visible');
  });

  //Adapted from jQuery's function
  function hasClass(selector) {
    var className = " " + selector + " ",
    rclass = /[\t\r\n\f]/g,
    i = 0,
    l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
        return true;
      }
    }
    return false;
  }

  function addClass(value) {
    var classes, elem, cur, clazz, j, finalValue,
    i = 0,
    len = this.length,
    proceed = typeof value === "string" && value;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).addClass( value.call( this, j, this.className ) );
      });
    }

    if ( proceed ) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = ( value || "" ).match( rnotwhite ) || [];

        for ( ; i < len; i++ ) {
          elem = this[ i ];
          cur = elem.nodeType === 1 && ( elem.className ?
            ( " " + elem.className + " " ).replace( rclass, " " ) :
            " "
            );

          if ( cur ) {
            j = 0;
            while ( (clazz = classes[j++]) ) {
              if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                cur += clazz + " ";
              }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = jQuery.trim( cur );
            if ( elem.className !== finalValue ) {
              elem.className = finalValue;
            }
          }
        }
      }

      return this;
    }

    function removeClass ( value ) {
      var classes, elem, cur, clazz, j, finalValue,
      i = 0,
      len = this.length,
      proceed = arguments.length === 0 || typeof value === "string" && value;

      if ( jQuery.isFunction( value ) ) {
        return this.each(function( j ) {
          jQuery( this ).removeClass( value.call( this, j, this.className ) );
        });
      }
      if ( proceed ) {
        classes = ( value || "" ).match( rnotwhite ) || [];

        for ( ; i < len; i++ ) {
          elem = this[ i ];
          // This expression is here for better compressibility (see addClass)
          cur = elem.nodeType === 1 && ( elem.className ?
            ( " " + elem.className + " " ).replace( rclass, " " ) :
            ""
            );

          if ( cur ) {
            j = 0;
            while ( (clazz = classes[j++]) ) {
              // Remove *all* instances
              while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
                cur = cur.replace( " " + clazz + " ", " " );
              }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = value ? jQuery.trim( cur ) : "";
            if ( elem.className !== finalValue ) {
              elem.className = finalValue;
            }
          }
        }
      }

      return this;
    }

})();
