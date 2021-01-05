import { utilService } from "../../../services/util.service.js";
var gMails = _createMails();
export const emailService = {
  getMails,
  removeMail,
  getMailById,
  sendMail,
  toggleMailStar,
  createMail,
};

function getMails(mailsCategory) {
  switch (mailsCategory) {
    case "all":
      return Promise.resolve(gMails.filter((mail) => !mail.isDraft));
    case "drafts":
      return Promise.resolve(gMails.filter((mail) => mail.isDraft));
    case "starred":
      return Promise.resolve(gMails.filter((mail) => mail.isStarred));
    case "sent":
      return Promise.resolve(gMails.filter((mail) => mail.isSent));
    case "trash":
      return Promise.resolve(gMails.filter((mail) => mail.isRemoved));
    case "inbox":
      return Promise.resolve(
        gMails.filter((mail) => !mail.isRemoved && !mail.isDraft)
      );
  }
}

function sendMail(mail, isDraft) {
  if (isDraft) mail.isDraft = true;
  else {
    mail.isDraft = false;
    mail.isSent = true;
  }
  gMails.unshift(mail);
  return Promise.resolve();
}

function toggleMailStar(mailId) {
  return Promise.resolve(
    getMailById(mailId).then((mail) => (mail.isStarred = !mail.isStarred))
  );
}

function getMailById(id) {
  const mail = gMails.find((mail) => mail.id === id);
  return Promise.resolve(mail);
}
function removeMail(id) {
  const idx = gMails.findIndex((mail) => mail.id === id);
  const mail = gMails[idx];
  if (mail.isRemoved){
    gMails.splice(idx, 1)
  }else gMails[idx].isRemoved = true;
  return Promise.resolve();
}

///// Local Func: /////

function _createMails() {
  gMails = [];
  gMails.push(
    createMail(
      "AppSus Team",
      "support@appsus.com",
      "Welcome to AppSus",
      `First off, welcome. And thanks for agreeing to help us test AppSus Email. By now you probably know the key ways in which AppSus differs from traditional webmail services. Searching instead of filing. A free gigabyte of storage. Messages displayed in context as conversations.`,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Muki Ben David",
      "MukiBenDavid@puki.co.il",
      "The mention of my name",
      `Dear AppSus members, please tell Yaron Biton stop using my name at every variable he makes. That's not funny anymore.`,
      Math.random() >= 0.65
    )
  );

  gMails.push(
    createMail(
      "Brazzers LTD",
      "donotreply@brazzers.com",
      "Your Brazzers subscription expired!",
      "Dear memeber, your Brazzers subscription has been expired. As a good gesture we've added an extension of one week to your membership. Please make sure to make a renewal at Brazzers.com",
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Netflix",
      "donotreply@netflix.com",
      "New watcher has been added",
      `Dear member, the new watcher "AhSheli-Yakar" has been added succesfuly. Please make sure not to exceed your simultaneously watchers limit.`,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Sathushi Nakamoto",
      "satoshin@gmx.com",
      "No worries, Bitcoin's crypto is strong",
      `SHA-256 is very strong.  It's not like the incremental step from MD5 to SHA1.  It can last several decades unless there's some massive breakthrough attack.`,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Apple inc. ",
      "donotreply@apple.com",
      "New purchase was made succesfuly!",
      "Dear member, a new purchase was made succesfuly. " + utilService.makeLorem(10),
      Math.random() >= 0.65

    )
  );
  gMails.push(
    createMail(
      "Check Point Security",
      "no-reply@csa-challenge.com",
      "Confirm your account for Check Point Security Academy 2020‏",
      `Thanks for signing up to the Check Point Security Academy website.
      On our website you can find all the information you need about our upcoming course and the challenges that you need to solve to join our class of 2020 and become the ultimate ninja.
      Do you think you have what it takes? Come and show us!
      `,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Pinterest‏",
      "confirm@account.pinterest.com",
      "I am in israel",
      `Please take a second to make sure we’ve got your email right. Didn’t sign up for Pinterest?
      `,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "AliExpress",
      "transaction@notice.aliexpress.com‏",
      "Order 8120198035236134 is good to go!",
      `The payment for order 8120198035236134 has been confirmed! We'll let you know when your order ships. You can also sign in to AliExpress to see more details.`,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "eBay",
      "ebay@ebay.com",
      "Thanks, your order is confirmed.",
      `We’ll let you know when your order is on the way. The estimated delivery time to order number #2261983855015 is: : Wed. May. 30 - Wed. Jul. 11. eBay will update the estimate when it ships to your address.`,
      Math.random() >= 0.65
    )
  );
  gMails.push(
    createMail(
      "Maria",
      "Maria_1211@gmail.com",
      "Can't wait to meet you up",
      "It seems like since we've met at that vacation, I can't get you out of my head. I am smelling the boxers you've left at my room everyday that passes. I am wishing for the moment that we can meet up again. Awaiting for your response, Maria.",
      Math.random() >= 0.65
    )
  );
  return gMails;
}

function createMail(sender, senderMail, subject, body, isTrue = false) {
  return {
    id: utilService.makeId(),
    sender,
    senderMail,
    subject,
    body,
    isRead: isTrue,
    isSent: isTrue,
    isStarred: isTrue,
    isDraft: false,
    isRemoved: false,
    sentAt: Date.now(),
  };
}
