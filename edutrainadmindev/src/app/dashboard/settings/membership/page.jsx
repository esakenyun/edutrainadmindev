export default function SettingMembership() {
  return (
    <>
      <div className="py-7">
        <div>
          <p className="py-2 px-2 mb-4 text-xl md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Settings</p>
          <div>
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-14">
              <div>
                <h1 className="py-2 px-3 border-b-2 w-fit border-primary-blue text-base font-bold text-primary-blue">Jenis Member</h1>
                <div className="py-5">
                  <form action="#">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="MemberGold" className="text-[#4C535F]">
                        Gold
                      </label>
                      <input type="text" id="MemberGold" name="MemberGold" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-5 flex flex-col gap-2">
                      <label htmlFor="MemberSilver" className="text-[#4C535F]">
                        Silver
                      </label>
                      <input type="text" id="MemberSilver" name="MemberSilver" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-5 flex flex-col gap-2">
                      <label htmlFor="Member" className="text-[#4C535F]">
                        Member
                      </label>
                      <input type="text" id="Member" name="Member" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-8 flex gap-5">
                      <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Simpan</button>
                      <button className="text-secondary-grey">Batalkan</button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <h1 className="py-2 px-3 border-b-2 w-fit border-primary-blue text-base font-bold text-primary-blue">Jenis Produk</h1>
                <div className="py-5">
                  <form action="#">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="Webinar" className="text-[#4C535F]">
                        Webinar
                      </label>
                      <input type="text" id="Webinar" name="Webinar" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-5 flex flex-col gap-2">
                      <label htmlFor="Workshop" className="text-[#4C535F]">
                        Workshop
                      </label>
                      <input type="text" id="Workshop" name="Workshop" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-5 flex flex-col gap-2">
                      <label htmlFor="Training" className="text-[#4C535F]">
                        Training
                      </label>
                      <input type="text" id="Training" name="Training" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukan Nominal Poin" />
                    </div>
                    <div className="pt-8 flex gap-5">
                      <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Simpan</button>
                      <button className="text-secondary-grey">Batalkan</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
