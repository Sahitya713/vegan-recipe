(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(20),i=n.n(s),c=n(4),r=n(2),l=n(0);var d=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"navbar-wrap",children:[Object(l.jsx)(c.b,{className:"create",to:"/create",children:"Add Recipe"}),Object(l.jsx)("span",{className:"divider",children:" | "}),Object(l.jsx)(c.b,{className:"explore",to:"/",children:"View Recipes"})]})})},u=n(9),o=n(10),p=n(12),h=n(11),j=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getRecipes=function(){fetch("https://my-vegan-recipes.herokuapp.com/api/v1/recipes",{method:"GET",redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t).data.data;e.setState({recipes:n})})).catch((function(e){return console.log("error",e)}))},e.componentWillMount=function(){e.getRecipes()},e.state={recipes:null},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"PLATE UP ONE OF THESE RECIPES TODAY"}),this.state.recipes&&Object(l.jsx)("div",{className:"recipe-card-wrap",children:this.state.recipes.map((function(e){return Object(l.jsxs)(c.b,{to:"/".concat(e._id),className:"recipe-card",children:[Object(l.jsx)("img",{className:"recipe-card-img",src:e.image,alt:""}),Object(l.jsx)("div",{className:"recipe-card-title",children:e.title})]},e.title)}))})]})}}]),n}(a.Component),m=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getID=function(){var t=e.props.match.params.id;e.setState({id:t},e.getRecipe)},e.getRecipe=function(){fetch("https://my-vegan-recipes.herokuapp.com/api/v1/recipes/".concat(e.state.id),{method:"GET",redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t).data.data,a={};a.title=n.title,a.image=n.image,a.ingredients=n.ingredients,a.steps=n.steps,e.setState(a)})).catch((function(e){return console.log("error",e)}))},e.checkDelete=function(){e.setState({delete:!0})},e.delete=function(){fetch("/api/v1/recipes/".concat(e.state.id),{method:"DELETE",redirect:"follow"}).then((function(e){return e.text()})).then((function(t){return e.setState({deleted:!0})})).catch((function(e){return console.log("error",e)}))},e.noDelete=function(){e.setState({delete:!1})},e.componentWillMount=function(){e.getID()},e.state={title:null,steps:[],image:null,ingredients:[],id:null,delete:!1,deleted:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"recipe-title",children:this.state.title}),Object(l.jsxs)("div",{className:"recipe-buttons-wrap",children:[Object(l.jsx)(c.b,{to:"/edit/".concat(this.state.id),children:Object(l.jsx)("button",{className:"edit button",children:"edit"})}),Object(l.jsx)("button",{className:"delete button",onClick:this.checkDelete,children:"delete"})]}),Object(l.jsx)("img",{className:"recipe-img",src:this.state.image,alt:""}),Object(l.jsxs)("div",{className:"ingredients-wrap",children:[Object(l.jsx)("h2",{className:"recipe-ingredients",children:"Ingredients"}),Object(l.jsx)("ol",{children:this.state.ingredients.map((function(e){return Object(l.jsxs)("li",{className:"recipe-ingredient",children:[e.name," - ",e.quantity]},e._id)}))})]}),Object(l.jsxs)("div",{className:"steps-wrap",children:[Object(l.jsx)("h2",{className:"recipe-steps",children:"Steps"}),Object(l.jsx)("ol",{children:this.state.steps.map((function(e,t){return Object(l.jsx)("li",{className:"recipe-step",children:e.instruction},t)}))})]}),this.state.delete&&Object(l.jsxs)("div",{className:"background",children:[Object(l.jsx)("h1",{className:"question",children:"Are you sure you want to delete this recipe?"}),Object(l.jsxs)("div",{className:"buttons-wrap",children:[Object(l.jsx)("button",{className:"button yes",onClick:this.delete,children:"yes"}),Object(l.jsx)("button",{className:"button no",onClick:this.noDelete,children:"no"})]})]}),this.state.deleted&&Object(l.jsxs)("div",{className:"background",children:[Object(l.jsxs)("h1",{className:"question",children:["The Recipe - ",this.state.title," - has been deleted"]}),Object(l.jsx)(c.b,{className:"buttons-wrap",to:"/",children:Object(l.jsx)("button",{className:"button link",children:"Go back Home"})})]})]})}}]),n}(a.Component),b=n(15),g=n(5),O=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).selectImages=function(t){var n=t.target.files[0];e.setState({image:n})},e.handleStepAdd=function(t){t.preventDefault();var n=Object(g.a)(e.state.steps);n.push({instruction:"Enter instruction"}),e.setState({steps:n})},e.handleStepDelete=function(t){t.preventDefault();var n=t.target.id,a=Object(g.a)(e.state.steps);a.splice(n,1),e.setState({steps:a})},e.handleStep=function(t){var n=t.target,a=n.id,s=n.name,i=n.value,c=Object(g.a)(e.state.steps);c[a][s]=i,e.setState({steps:c})},e.handleIngredientAdd=function(t){t.preventDefault();var n=Object(g.a)(e.state.ingredients);n.push({name:"Enter ingredient name",quantity:"Enter quantity"}),e.setState({ingredients:n})},e.handleIngredientDelete=function(t){t.preventDefault();var n=t.target.id,a=Object(g.a)(e.state.ingredients);a.splice(n,1),e.setState({ingredients:a})},e.handleIngredient=function(t){var n=t.target,a=n.id,s=n.name,i=n.value,c=Object(g.a)(e.state.ingredients);c[a][s]=i,e.setState({ingredients:c})},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(b.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault(),e.createRecipe()},e.createRecipe=function(){var t=[],n=e.state,a=n.steps,s=n.image,i=n.title,c=n.ingredients;null===s||"Enter title"===i||""===i?t.push("Please enter all the information"):"image/jpeg"!==s.type&&"image/jpg"!==s.type&&"image/png"!==s.type&&"image/pdf"!==s.type&&t.push("Only images of type jpeg, jpg, png or pdf can be uploaded");for(var r=0;r<a.length;r++)if("Enter instruction"===a[r].instruction||""===a[r].instruction){t.push("Please ensure all the instructions are listed properly");break}for(var l=0;l<c.length;l++)if("Enter ingredient name"===c[l].name||""===c[l].name||"Enter quantity"===c[l].quantity||""===c[l].quantity){t.push("Please ensure all the ingredient names and quantity are listed properly");break}if(t.length>0)e.setState({errorMessages:t});else{var d=new FormData;d.append("steps",JSON.stringify(a)),d.append("ingredients",JSON.stringify(c)),d.append("title",i),d.append("image",s,s.name),fetch("https://my-vegan-recipes.herokuapp.com/api/v1/recipes",{method:"POST",body:d,redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t);if("error"===n.status){var a=[];a.push(n.message),e.setState({errorMessages:a})}else if("success"===n.status){var s=n.data.data._id;e.setState({infoUploaded:!0,id:s})}})).catch((function(e){console.log(e)}))}},e.state={title:"Enter title",steps:[{instruction:"Enter instruction"}],ingredients:[{name:"Enter ingredient name",quantity:"Enter quantity"}],image:null,errorMessages:[],infoUploaded:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Create a new Vegan Recipe!"}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-wrap",onSubmit:this.handleSubmit,children:[Object(l.jsx)("div",{className:"title-label label",children:"Title:"}),Object(l.jsx)("input",{type:"text",value:this.state.title,name:"title",onChange:this.handleChange,className:"title-input input"}),Object(l.jsx)("div",{className:"img-label label",children:"Upload an image of the item:"}),Object(l.jsx)("input",{type:"file",onChange:this.selectImages,accept:".jpg, .jpeg, .png, .pdf",className:"img-upload"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"label",children:"Ingredients required:"}),Object(l.jsxs)("div",{className:"ingredient-wrap",children:[Object(l.jsx)("span",{className:"label ingredient-label",children:"Ingredient:"}),Object(l.jsx)("span",{className:"label quantity-label",children:"quantity:"})]}),this.state.ingredients.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:t.name,name:"name",id:n,onChange:e.handleIngredient,className:"input ingredient-input"}),Object(l.jsx)("input",{type:"text",value:t.quantity,name:"quantity",id:n,onChange:e.handleIngredient,className:"input quantity-input"}),Object(l.jsx)("button",{className:"x",id:n,onClick:e.handleIngredientDelete,children:"x"})]},n)})),Object(l.jsx)("button",{className:"add",name:"addIngredient",onClick:this.handleIngredientAdd,children:"+ Add Ingredient"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"label",children:"Instructions:"}),this.state.steps.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"label step-label",children:["step ",n+1,":"]}),Object(l.jsx)("input",{type:"text",value:t.instruction,name:"instruction",id:n,onChange:e.handleStep,className:"input step-input"}),Object(l.jsx)("button",{className:"x",id:n,onClick:e.handleStepDelete,children:"x"})]},n)})),Object(l.jsx)("button",{className:"add",name:"addStep",onClick:this.handleStepAdd,children:"+ Add Instruction"})]}),Object(l.jsx)("button",{className:"button submit",onClick:this.handleSubmit,children:"submit"}),Object(l.jsx)("div",{className:"err-wrap",children:this.state.errorMessages&&this.state.errorMessages.map((function(e,t){return Object(l.jsx)("div",{children:e},t)}))})]})}),this.state.infoUploaded&&Object(l.jsxs)("div",{className:"background",children:[Object(l.jsx)("h1",{className:"question",children:"Your recipe has been successfully uploaded!"}),Object(l.jsx)(c.b,{className:"buttons-wrap",to:"/".concat(this.state.id),children:Object(l.jsx)("button",{className:"button link",children:"View Recipe"})})]})]})}}]),n}(a.Component),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getID=function(){var t=e.props.match.params.id;e.setState({id:t},e.getRecipe)},e.getRecipe=function(){fetch("https://my-vegan-recipes.herokuapp.com/api/v1/recipes/".concat(e.state.id),{method:"GET",redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t).data.data,a={};a.title=n.title,a.imageUrl=n.image,a.ingredients=n.ingredients,a.steps=n.steps,e.setState(a)})).catch((function(e){return console.log("error",e)}))},e.componentWillMount=function(){e.getID()},e.selectImages=function(t){var n=t.target.files[0];e.setState({image:n})},e.handleStepAdd=function(t){t.preventDefault();var n=Object(g.a)(e.state.steps);n.push({instruction:"Enter instruction"}),e.setState({steps:n})},e.handleStepDelete=function(t){t.preventDefault();var n=t.target.id,a=Object(g.a)(e.state.steps);a.splice(n,1),e.setState({steps:a})},e.handleStep=function(t){var n=t.target,a=n.id,s=n.name,i=n.value,c=Object(g.a)(e.state.steps);c[a][s]=i,e.setState({steps:c})},e.handleIngredientAdd=function(t){t.preventDefault();var n=Object(g.a)(e.state.ingredients);n.push({name:"Enter ingredient name",quantity:"Enter quantity"}),e.setState({ingredients:n})},e.handleIngredientDelete=function(t){t.preventDefault();var n=t.target.id,a=Object(g.a)(e.state.ingredients);a.splice(n,1),e.setState({ingredients:a})},e.handleIngredient=function(t){var n=t.target,a=n.id,s=n.name,i=n.value,c=Object(g.a)(e.state.ingredients);c[a][s]=i,e.setState({ingredients:c})},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(b.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault(),e.updateRecipe()},e.updateRecipe=function(){var t=[],n=e.state,a=n.steps,s=n.image,i=n.title,c=n.ingredients;""===i&&t.push("Please enter a title"),s&&"image/jpeg"!==s.type&&"image/jpg"!==s.type&&"image/png"!==s.type&&"image/pdf"!==s.type&&t.push("Only images of type jpeg, jpg, png or pdf can be uploaded");for(var r=0;r<a.length;r++)if("Enter instruction"===a[r].instruction||""===a[r].instruction){t.push("Please ensure all the instructions are listed properly");break}for(var l=0;l<c.length;l++)if("Enter ingredient name"===c[l].name||""===c[l].name||"Enter quantity"===c[l].quantity||""===c[l].quantity){t.push("Please ensure all the ingredient names and quantity are listed properly");break}if(t.length>0)e.setState({errorMessages:t});else{var d=new FormData;d.append("steps",JSON.stringify(a)),d.append("ingredients",JSON.stringify(c)),d.append("title",i),s&&d.append("image",s,s.name);var u={method:"PATCH",body:d,redirect:"follow"};fetch("https://my-vegan-recipes.herokuapp.com/api/v1/recipes/".concat(e.state.id),u).then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t);if("error"===n.status){var a=[];a.push(n.message),e.setState({errorMessages:a})}else"success"===n.status&&e.setState({infoUpdated:!0})})).catch((function(e){console.log(e)}))}},e.state={title:"Enter title",steps:[{instruction:"Enter instruction"}],ingredients:[{name:"Enter ingredient name",quantity:"Enter quantity"}],imageUrl:"",image:null,errorMessages:[],infoUpdated:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Edit your Recipe!"}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-wrap",onSubmit:this.updateRecipe,children:[Object(l.jsx)("div",{className:"title-label label",children:"Title:"}),Object(l.jsx)("input",{type:"text",value:this.state.title,name:"title",onChange:this.handleChange,className:"title-input input"}),Object(l.jsx)("div",{className:"curr-img-wrap",children:Object(l.jsx)("img",{className:"curr-img",src:this.state.imageUrl,alt:"OriginalImage"})}),Object(l.jsx)("div",{className:"img-label label",children:"Upload a different image"}),Object(l.jsx)("input",{type:"file",onChange:this.selectImages,accept:".jpg, .jpeg, .png, .pdf",className:"img-upload"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"label",children:"Ingredients required:"}),Object(l.jsxs)("div",{className:"ingredient-wrap",children:[Object(l.jsx)("span",{className:"label ingredient-label",children:"Ingredient:"}),Object(l.jsx)("span",{className:"label quantity-label",children:"quantity:"})]}),this.state.ingredients.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:t.name,name:"name",id:n,onChange:e.handleIngredient,className:"input ingredient-input"}),Object(l.jsx)("input",{type:"text",value:t.quantity,name:"quantity",id:n,onChange:e.handleIngredient,className:"input quantity-input"}),Object(l.jsx)("button",{className:"x",id:n,onClick:e.handleIngredientDelete,children:"x"})]},n)})),Object(l.jsx)("button",{className:"add",name:"addIngredient",onClick:this.handleIngredientAdd,children:"+ Add Ingredient"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"label",children:"Instructions:"}),this.state.steps.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"label step-label",children:["step ",n+1,":"]}),Object(l.jsx)("input",{type:"text",value:t.instruction,name:"instruction",id:n,onChange:e.handleStep,className:"input step-input"}),Object(l.jsx)("button",{className:"x",id:n,onClick:e.handleStepDelete,children:"x"})]},n)})),Object(l.jsx)("button",{className:"add",name:"addStep",onClick:this.handleStepAdd,children:"+ Add Instruction"})]}),Object(l.jsx)("button",{className:"button submit",onClick:this.handleSubmit,children:"Edit"}),Object(l.jsx)("div",{className:"err-wrap",children:this.state.errorMessages.map((function(e,t){return Object(l.jsx)("div",{children:e},t)}))})]})}),this.state.infoUpdated&&Object(l.jsxs)("div",{className:"background",children:[Object(l.jsx)("h1",{className:"question",children:"Your recipe has been successfully updated!"}),Object(l.jsx)(c.b,{className:"buttons-wrap ",to:"/".concat(this.state.id),children:Object(l.jsx)("button",{className:"button link",children:"View Recipe"})})]})]})}}]),n}(a.Component);var x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,component:j}),Object(l.jsx)(r.a,{path:"/create",exact:!0,component:O}),Object(l.jsx)(r.a,{path:"/edit/:id",exact:!0,component:f}),Object(l.jsx)(r.a,{path:"/:id",exact:!0,component:m})]})]})})};i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cc3df380.chunk.js.map