export const stringTemplateParser = (expression, valueObj, html) => {
    const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    let template = expression.replace(templateMatcher, (substring, value, index) => {
        value = valueObj[value];
        return value;
    });
    if (html === true) {
        return {__html: template};
    } else {
        return template
    }
}

