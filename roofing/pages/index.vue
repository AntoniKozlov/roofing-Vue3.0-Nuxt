<script>

    import ContactsSection from '../components/contacts-section/ContactsSection.vue';
    import PortfolioSection from '../components/portfolio-section/PortfolioSection.vue';
    import ServicesSection from '../components/services-section/ServicesSection.vue';
    import ProductionSection from '../components/production-section/ProductionSection.vue';
    import WorkPlanSection from '../components/work-plan/WorkPlan.vue';

    export default {
        name: 'index',
        components: {
            ContactsSection,
            PortfolioSection,
            ServicesSection,
            ProductionSection,
            WorkPlanSection,
        }
    }

</script>

<template>

    <div id="home" class="home">
        <div class="homeImage">
            <div class="container-fluid h-100 minHeight">
                <div class="row justify-content-between h-50">
                    <div class="col-12 block col-md-6 col-lg-6 centered">
                        <div class="backgroundHomeBlocks block swing">
                            <div class="marginAuto"><span class="uppercase"><b>Профессиональные</b></span> кровельные
                                работы в Гомеле и Гомельской области
                            </div>
                        </div>
                    </div>
                    <div class="col-12 block col-md-6 col-lg-6 centered">
                        <div class="textRight block backgroundHomeBlocks swing">
                            <div class="marginAuto">Выезд на замер <span class="uppercase"><b>бесплатно</b></span></div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-between h-50">
                    <div class="col-12 block col-md-6 col-lg-6 centered">
                        <div class="bottom block backgroundHomeBlocks swing">
                            <div class="marginAuto"><span class="uppercase"><b>от 6 лет</b></span> на рынке кровельных
                                услуг
                            </div>
                        </div>
                    </div>
                    <div class="col-12 block col-md-6 col-lg-6 centered">
                        <div class="bottom block textRight backgroundHomeBlocks swing">
                            <div class="marginAuto"><span class="uppercase"><b>от 5 лет</b></span> гарантия на
                                выполненную работу
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProductionSection/>
    <ServicesSection/>
    <PortfolioSection/>
    <WorkPlanSection/>
    <ContactsSection/>

</template>