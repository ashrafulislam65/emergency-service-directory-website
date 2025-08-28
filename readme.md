
---

## ✅ Main Requirements 

### 1. Navbar

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

- **There are 9 cards**. Each card  contains:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness 

- Website is fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

- On clicking a card's **Call Button**, following actions will happen:
  - An **alert** will appear with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, An alert will appear with message and terminate the process.
  - The  service will be added  into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

-  All called services will appear with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---



### 6. Answers of  the following questions :

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
- Ans No1:
      getElementById ---> returns a single element or null.Basically Used to find an element uniquely.
      getElementsByClassname ---> returns a HTML collections (an array like object).
      querySelector ---> returns a single element or null.basically its returns the first match. 

---

2. How do you **create and insert a new element into the DOM**?
- Ans No2:
     1.first i create a tag element which i need like p,div etc.
     const element = document.createElement('p');
     2.Then i will change the content nt innerText
     const content = element.innerText;
      content ="My name "; 
     3.next append the tag
     element.appendChild(content).

---

3. What is **Event Bubbling** and how does it work?
- Ans No3:
 when we perform an event like onclick,keypress etc in an element and it go through its parent ,grandparent ,top most element  its called event bubbling.

 Its use  to manipulates parent nodes by a single event handler.

 ---

   
4. What is **Event Delegation** in JavaScript? Why is it useful?
-Ans No4:
     Its a method by which we can handle a child element event by adding a event handler to its parent node .

     its useful because there no need to add event all the elements rather than we use a single handler to parent and manipulates all the  elements.

---

5. What is the difference between **preventDefault() and stopPropagation()** methods?
- Ans No5:
     preventDefault()--> Use to prevent browser default actions 
     stopPropagation() --> Use to prevent bubbling up event

---

## 🧪 Challenges Part 

- By clicking the **Copy button**,  an alert will appear and **increase the copy count** 

- Hotline number will be **copied on click** so it can be pasted anywhere 


```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section 


 Local time in js implemented successfully.😎
```

---

## ⚙️ Technology Stack

- HTML
- CSS (  DaisyUI  is used)
- JavaScript ( Vanilla only. No Framework / Library are used )

---

## 📌 Rules

- ✅ More Than  **5 meaningful commits** are added.😎
- ❌ No Lorem Ipsum or dummy placeholder text. are  Used **relevant content are used**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
    
    https://github.com/ashrafulislam65/emergency-service-directory-website

- 🌐 **Live Link**
  
   https://ashrafulislam65.github.io/emergency-service-directory-website/

---

# Rode to My Dream 🎯

