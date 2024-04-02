# DOM có 3 thành phần chính
1. Element
2. Attribute
3. Text

- Ex: a href="https://google.com">Google
element: thẻ a
attribute: href
text: google

# Sự khác nhau giữa innerHTML và textContent
1. innertHTML : t# DOM document object model

# Phương thức truy xuất phần tử trong DOM
1. document.getElementById("id") => return object
2. document.getElementByTagName("tag-name") => return array
3. document.getElementByClassName("class-name") => return array
4. document.querySelector("#id") || document.querySelector(".class")
5. document.querySelectorAll(selector) => return array


# Thao tác phần tử trong DOM
1. innerHTML: thêm, xoá, sửa, thay đổi cấu trúc element
2. textContent: chỉ thay đổi text của element
3. createElement
4. appendChild
5. removeChild
6. replaceChild

# Style css cho element
1. element.style.CSS_Method = "CSS_value"
Ex: p.style.border = "1px solid black"

# Event trong DOM
1. sự kiện chuột: onmouseover, onmouseout
2. sự kiện bàn phím: onkeyup, onkeydown, onkeypress
3. sự kiện với layout web: scroll, resize
4. sự kiện với hành động trên web: copy, paste, reload
5. để thực thi khối lệnh khi sự kiện xảy ra: addEventListener() hoặc sử dụng thuộc tính trong elemment: onchange, onclick, onmouseover,...
   
## Form
