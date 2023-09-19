/**
 * - One Way Binding
 *  -- interpolation
 * -- attribute binding
 * -- fire event in angular (Event Binding)
 *
 *== Two Way Binding
    -- Normal Way
    -- FormsModule


    -- set reference for any Element in html
    -- ViewChild -- ContentChild

==============================
 --- Directives
    -- Structural Directives
        -- *ngFor -- *ngIf --- *ngSwitch
    -- Attribute Directives
    -- [ngStyle] -- [ngClass] -- [style.propName] -- [class.ClassName]

-- Component Directives

-- Template Driven Form

*/

/**
 * Lab
 *===========================================================================
 * 1- Todos List
 * =========================================================================
  2- Product Section
    -- each product show have an image , price, quantity and buyNow Btn
       -- show [no products available] --if the product quantity = 0
        -- show [Only One Product Available ] -- if the product quantity = 1
      -- show Otherwise -- show product quantity

    --  buyNow Btn background will be
        -- red -- in case the product quantity = 0
        -- warning -- in case the product quantity = 1
        -- success -- in case the product quantity > 1

    == BuyNow Btn text will be
        -- Solid Out - in case the product quantity = 0
        -- Buy Now --> in case the product quantity >= 1

================================================================================
    3- Add New Student Task
        -- Student Name Input length >=4 
        -- Student Name Input is Required 
        -- Student Age Input is Required 
        -- Student Age Input is > 18
    == No duplicate data will be added to student Table
 */
