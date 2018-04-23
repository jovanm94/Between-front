import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CallBroker {
  private siteUrl = '';
  constructor(public http: HttpClient) {
  }

  // /**
  //  *  GET user for id
  //  *  Should return user properties
  //  */
  //
  // getUser(userId: string) {
  //   return this.http.get(this.getUserForId + '/' + userId);
  // }
  //
  // /**
  //  *  User forgot password
  //  *  Should return successful sent
  //  */
  //
  // userForgotPassword(email: string) {
  //   return this.http.post(this.forgotPassword + '', {email: email});
  // }
  //
  // /**
  //  *  Get ticket messages
  //  *  Should return ticket messages
  //  */
  //
  // returnTicketMessages(ticketId: string, page: number = 2) {
  //   return this.http.post(this.getTicketMessages, {ticket_id: ticketId, page: page});
  // }
  //
  // /**
  //  *  User change password
  //  *  Should return successful changed
  //  */
  //
  // userChangePassword(email: string, oldPassword: string, newPassword: string) {
  //   return this.http.post(this.changePassword + '', {email: email, oldPassword: oldPassword, newPassword: newPassword});
  // }
  //
  //
  // /**
  //  *  User resets password
  //  *  Should return successful reset
  //  */
  //
  // userResetPassword(email: string, hash: string, newPassword: string) {
  //   return this.http.post(this.resetPassword, {email: email, hash: hash, password: newPassword});
  // }
  //
  // /**
  //  *  Get other offers with the same tags
  //  *  Should return paging of offers
  //  */
  //
  // getOtherOffersWithSameTags(page: number = 1, tag_ids: string[] = [], offerId: string) {
  //   return this.http.post(this.searchOffersByTags, {page: page, tag_ids: tag_ids, offer_id: offerId});
  // }
  //
  // /**
  //  *  User verifies account
  //  *  Should return successful verify
  //  */
  //
  // verifyUserAccount(code: string, userId: string) {
  //   return this.http.post(this.sendVerificationCode, {verification_code: code, user_id: userId});
  // }
  //
  // /**
  //  *  Refresh call for ticket
  //  */
  //
  // liveTicket(ticketId: string, userId: string, lastMessageId: string) {
  //   return this.http.post(this.ticketRefresher, {ticket_id: ticketId, user_id: userId, message_id: lastMessageId});
  // }
  //
  //
  // /**
  //  *  Reset changes for ticket for user
  //  *  Should return successfull
  //  */
  //
  // removeHasChangesForTicket(ticketId: string, userId: string) {
  //   return this.http.post(this.removeTicketHasChanges, {tiket_id: ticketId, user_id: userId});
  // }
  //
  // /**
  //  *  GET notifications for user
  //  *  Should return num of notifications
  //  */
  //
  // getUserTicketNotifications(userId: string, status: string) {
  //   return this.http.post(this.getAllTicketsNotifications + '/' + userId, {status: status});
  // }
  //
  // /**
  //  *  GET cities
  //  *  Should return list of cities that the registering user can choose from
  //  */
  //
  // getCities(source: string) {
  //   return this.http.post(this.cities + '?source=' + source, {});
  // }
  //
  // /**
  //  *  GET streets
  //  *  Should return list of streets that the registering user can choose from
  //  */
  //
  // getStreets(cityId: string, source: string) {
  //   return this.http.post(this.streets + '?mesto_id=' + cityId + '&source=' + source, {});
  // }
  //
  // /**
  //  *  GET offers for user
  //  *  Should return list of offers that the user created
  //  */
  //
  // getOffersForUser(user_id: string, status: string = '', page: number = 0, limit: string = '9', all: boolean = false) {
  //   return this.http.post(this.getUserOffers, {user_id: user_id, status: status, page: page, limit: limit, all: all});
  // }
  //
  // /**
  //  *  GET tickets for user
  //  *  Should return list of ticketsthat the user created
  //  */
  //
  // getTicketsForUser(user_id: string, status: string = '', page: number = 1) {
  //   return this.http.post(this.getUserTickets, {user_id: user_id, status: status, page: page});
  // }
  //
  //
  // /**
  //  *  Change status for offer
  //  *  Should return successfull
  //  */
  //
  // changeOfferStatus(offerId: string, status: string) {
  //   return this.http.put(this.changeStatus, {offer_id: offerId, offer_status: status});
  // }
  //
  // /**
  //  *  GET ticket for user
  //  *  Should return ticket or does not exist
  //  */
  //
  // getTicket(ticketId: string = '', offerId: string = '', offerUserId: string = '', demandUserId: string= '', isTrade: boolean = null) {
  //   return this.http.post(this.getSingleTicket, {tiket_id: ticketId, oglas_id: offerId, korisnik_oglas_id: offerUserId, korisnik_ponuda_id: demandUserId, isTrade: isTrade});
  // }
  //
  //
  // /**
  //  *  GET ticket history
  //  *  Should return ticket history
  //  */
  //
  // getTicketHistory(ticketId: string ) {
  //   // const searchParams: URLSearchParams = this.objToSearchParams({ticketId: ticketId});
  //   return this.http.get(this.getHistoryForTicket + '/' + ticketId);
  // }
  //
  // /**
  //  *  Save ticket or new message
  //  *  Should return successful
  //  */
  //
  // saveTicketOrMessage(ticket_id: string, offerId: string, offerUserId: string, demandUserId: string, messageContent: string, userFromId: string, userToId: string, offerDemandJson: OfferForTradeModel = null, action: string = '') {
  //   return this.http.post(this.addTicketOrMessage, {ticket_id: ticket_id, oglas_id: offerId, korisnik_oglas_id: offerUserId, korisnik_ponuda_id: demandUserId, sadrzaj_poruke: messageContent,
  //                                                   korisnik_from: userFromId, korisnik_to: userToId, ponudaOglasJson: offerDemandJson, akcija: action});
  // }
  //
  //
  // /**
  //  *  Delete post on ticket
  //  *  Should return successful delete
  //  */
  //
  // deletePostForTicket(eventId: string) {
  //   return this.http.post(this.ticketDeletePost, {eventIdForDelete: eventId});
  // }
  //
  //
  // /**
  //  *  Change ticket status
  //  *  Should return successful change
  //  */
  //
  // changeStatusForTicket(ticketId: string, choise: boolean, userId: string) {
  //   return this.http.post(this.changeTicketStatus, {ticket_id: ticketId, accept: choise, user_id: userId});
  // }
  //
  // /**
  //  *  Post initialOffer
  //  *  Receives userId, offer type, product name, product description tags, product description, product images[], product demand name, product demand description tags, product demand description tags
  //  *  Should return created successfully
  //  */
  //
  // storeOffer(userId: string, offerType: number, offerProductName: string, offerProductDescription: string, offerProductDescriptionTags: HashTagModel[],
  //                   productImages: string[] = [], demandProductDescription: string, demandProductDescriptionTags: HashTagModel[], status: string = null) {
  //   return this.http.post(this.initialOffer, {korisnik_id: userId, tip_oglasa: offerType, naziv_proizvoda_oglas: offerProductName, tagovi_oglas: offerProductDescriptionTags,
  //     opis_proizvoda_oglas: offerProductDescription, slike_id_oglas: productImages, tagovi_ponuda: demandProductDescriptionTags, opis_ponuda: demandProductDescription, status: status});
  // }
  //
  //
  // /**
  //  *  Update offer
  //  *  Receives userId, offer type, product name, product description tags, product description, product images[], product demand name, product demand description tags, product demand description tags
  //  *  Should return updated successfully
  //  */
  //  updateOffer(offerId: string, offerType: number, offerProductName: string, offerProductDescription: string, offerProductDescriptionTags: HashTagModel[],
  //            productImages: string[] = [], demandProductDescription: string, demandProductDescriptionTags: HashTagModel[], status: string = null) {
  //   return this.http.post(this.offerUpdate, {oglas_id: offerId, tip_oglasa: offerType, naziv_proizvoda_oglas: offerProductName, tagovi_oglas: offerProductDescriptionTags,
  //     opis_proizvoda_oglas: offerProductDescription, slike_id_oglas: productImages, tagovi_ponuda: demandProductDescriptionTags, opis_ponuda: demandProductDescription, status: status});
  // }
  //
  //
  // /**
  //  *  Update user
  //  *  Should return updated successfully
  //  */
  //
  // updateUser(userId: string, name: string, professionTag: any, cityId: string, streetId: string, numberId: string, companyRegistrationNumber: number,
  //           companyNumber: string, email: string, logoId: string, description: string, authorisedPerson: string, phoneNumber: string, website: string) {
  //   return this.http.post(this.userUpdate, {user_id: userId, naziv: name, tag_delatnosti: professionTag, mesto_id: cityId, ulica_id: streetId,
  //                                           broj_zgrade: numberId, maticni_broj: companyRegistrationNumber, pib: companyNumber,
  //                                           email: email, logo_id: logoId, opis: description, ovlasceno_lice: authorisedPerson,
  //                                           broj_telefona: phoneNumber, www: website});
  // }
  //
  // /**
  //  *  Get hashtags - post method
  //  *  Should return list of hashtags
  //  */
  //
  // getTags(source: string, needsToken: boolean = true) {
  //   return this.http.post(this.hashtags + '?source=' + source + '&needsToken=' + needsToken, {});
  // }
  //
  // /**
  //  *  GET offers
  //  *  Should return list of hashtags
  //  *  Receives offerId?, isPromoted, tags for search, page
  //  */
  //
  // getOffers(/*userId: string = '', */offerId: string = '', isPromoted: boolean = false, tagIDs: string[] = [],
  //           page: number = 1, isOfferOrDemand: boolean = null, keywords: string[] = [], all: boolean = false, needsToken: boolean = true) {
  //   return this.http.post(this.searchOffers, {oglas_id: offerId, promoted: isPromoted, tag_ids: tagIDs,
  //     page: page, ponudjeno: isOfferOrDemand, keywords: keywords, /* user_id: userId, */ all: all, needsToken: needsToken});
  // }
  //
  //
  // /**
  //  *  Delete image
  //  *  Should return successful delete
  //  *  Receives image id
  //  */
  //
  // deleteMedia(imageId: string) {
  //   return this.http.put(this.deleteImage, {media_id: imageId});
  // }
  //
  // /**
  //  *  Upload files
  //  *  Should return file database id, name, link, description, type, binary, linkToWeb, linkToThumb
  //  */
  //
  // uploadMedia(file: any, files: any[], choise: string, needsToken: boolean) {
  //   if (choise == 'single') {
  //     const formData: FormData = new FormData();
  //     formData.append('files[]', file, file.name);
  //     formData.append('needsToken', needsToken.toString());
  //     const headers = new HttpHeaders();
  //     return this.http.post(this.media, formData, {headers: headers});
  //   } else {
  //     const formData:
  //         FormData = new FormData();
  //     for (const f of files) {
  //       formData.append('files[]', f, f.name);
  //     }
  //     formData.append('needsToken', needsToken.toString());
  //     const headers = new HttpHeaders();
  //     return this.http.post(this.media, formData, {
  //         headers: headers
  //     });
  //   }
  // }
  //
  // checkTicketStatus(ticketId: string) {
  //   return this.http.get(this.ticketStatus + '/' + ticketId);
  // }
}
